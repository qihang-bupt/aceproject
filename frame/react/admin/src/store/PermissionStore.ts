import {Iroute} from "../route/index";
import {action, makeAutoObservable, runInAction} from "mobx";
// import {getAdminPermissionList} from "../api/permission";

export default class PermissionStore {
    // permissionList: IRouter[] = []
    permissionList: Iroute[] = []
    state: string = 'loading'

    constructor() {
        makeAutoObservable(this)
    }

    @action
    initPermission = async () => {
        // const permissionList = await getAdminPermissionList().then(response => {
        //     return response.data.data
        // })
        runInAction(() => {
            // this.permissionList = permissionList
            this.permissionList = [
                {
                    title:'test',
                    path: 'deleteRole'
                }
            ]
            this.state = 'success'
        })
    }

}
