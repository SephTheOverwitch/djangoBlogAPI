from django.db.models.query import QuerySet
from .serializers import PostSerializer
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response
from api import serializers
from django.contrib.auth.models import User
from api.models import Post, Comment
from rest_framework import permissions
from api.permissions import IsOwnerOrReadOnly
from rest_framework.views import Http404
import logging
from rest_framework import status

logger = logging.getLogger(__name__)


@api_view(['GET'])
def getLatestPost(request):

    try:
        post = Post.objects.order_by('-created')[0]
        serializer = PostSerializer(post, many=False)
        return Response(serializer.data)
    except Post.DoesNotExist:
        raise Http404("Post doesn't exist")

@api_view(['POST'])
def createNewPost(request):
    try:
        logger.error('In create')
        logger.error(request.data)
        serializer = PostSerializer(data = request.data)
        logger.error('Serialization is done')
        logger.error(serializer)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        logger.error('is saved')
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as err:
        logger.error(err)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class PostList(generics.ListCreateAPIView):
    logger.error(Post.objects.all())
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]