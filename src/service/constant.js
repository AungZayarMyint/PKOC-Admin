// const domain = process.env.REACT_APP_DOMAIN;
// const node_domain = process.env.REACT_APP_NODE_DOMAIN
const domain = process.env.REACT_APP_DOMAIN;

export const LOGIN_API = `${domain}/api/admin/login`;
export const USER_API = `${domain}/api/admin/users`;
export const USER_INFO_API = `${domain}/api/admin/users`;
export const CHANGE_PASSWORD_API = `${domain}/api/change-password`;
export const ADMIN_DASHBOARD_API = `${domain}/api/admin/dashboard`;
export const POST_API = `${domain}/api/posts`;
export const POST_DETAILS_API = `${domain}/api/post`;
export const CREATE_POST_API = `${domain}/api/admin/create-post`;
export const UPDATE_POST_API = `${domain}/api/admin/update-post`;
export const DELETE_POST_API = `${domain}/api/admin/delete-post`;

// for proxy
export const IMAGE_PROXY_API = (name) => `${domain}/api/proxy/image/${name}`;
