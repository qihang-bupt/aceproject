import React, {Component, ReactNode, Suspense} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Iroute, router, unAuthRouter} from '../route/index'
import AppLayout from "./AppLayout";

class View extends Component {
    generateAuth = (router: Iroute[]):ReactNode => {
        return (
            <>
                {
                    router?.map(r => {
                        if(r.children && r.children.length > 0){
                            return this.generateAuth(r.children)
                        }
                        return (<Route path={r.path} key={r.title} exact>
                            <AppLayout>
                                {r.component}
                            </AppLayout>
                        </Route>)
                        }
                    )
                }
            </>
        )
    }

    render() {
        return (
            <>
                <Suspense fallback={<div>loading...</div>}>
                    <Router>
                        <Switch>
                            <Route path={'/'} exact>
                                <Redirect to={'/indexManage'}></Redirect>
                            </Route>

                            {
                                this.generateAuth(router)
                            }
                            {
                                unAuthRouter.map(r => <Route path={r.path} key={r.title}>
                                    {r.component}
                                </Route>)
                            }
                        </Switch>
                    </Router>
                </Suspense>
            </>
        );
    }
}

export default View;
