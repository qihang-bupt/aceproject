import UserStore from "./UserStore";
import AdminStore from "./AdminStore";
import PermissionStore from "./PermissionStore";

export default {
    userStore: new UserStore(),
    adminStore: new AdminStore(),
    permissionStore: new PermissionStore()
}
