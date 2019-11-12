declare var data: any;

export const environment = {
  GetPosts: data.basePath + 'api/post/',
  GetPendingPosts: data.basePath + 'api/post/',
  CheckUser: data.basePath + 'api/user/CheckUser/',
  CreatePost: data.basePath + 'api/post/'
};