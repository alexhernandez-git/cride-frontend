import React, { useContext } from 'react'
import "static/assets/styles/containers/TeachersZone.scss"
import TeachersMenu from "src/components/Users/Teachers/TeachersZone/TeachersMenu"
import { Route, Redirect } from 'react-router-dom';
import ScrollToTop from "src/utils/ScrollToTop"
import "static/assets/styles/components/Layout/ZoneSidebar.scss"
import TeachersProfileEdit from "src/components/Users/Teachers/TeachersZone/TeachersProfileEdit/TeachersProfileEdit"
import TeachersClasses from "src/components/Users/Teachers/TeachersZone/TeachersClasses/TeachersClasses"
import { AppContext } from "src/context/AppContext"
export default function TeachersZone() {
    const appContext = useContext(AppContext);
    return appContext.userProfile.loading ? 'Cargando...' : (
        <AppContext.Consumer>
            {appContext => (
                <>
                    {!appContext.userProfile.isAuthenticated ?
                        <Redirect to="/" />
                        :
                        ''
                    }
                    <div className="min-vh-100 bg-light pb-5">

                        <TeachersMenu />

                        <div className="content-zone">
                            {!appContext.userProfile.user.profile.is_teacher ?
                                <>
                                    <div>
                                        <div className="bg-gradient-green border-0 text-white text-center cursor-no-ponter py-2 px-4 w-100"
                                        >Activa cuenta del profesor, para dar classes en ClassLine</div>
                                    </div>

                                </>
                                :
                                ''
                            }
                            <ScrollToTop />
                            <Route exact path="/myzone/teacher" component={TeachersProfileEdit} />
                            {
                                appContext.userProfile.user.profile.is_teacher ?
                                    <>
                                        <Route exact path="/myzone/teacher/classes" component={TeachersClasses} />
                                        <Route exact path="/myzone/teacher/messages" component={() => `Proximamente, demomento si quieres contactar con tus alumnos en tus clases tienes sus correos. Disculpe las molestias. `} />
                                    </>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                </>
            )
            }
        </AppContext.Consumer >
    )
}
