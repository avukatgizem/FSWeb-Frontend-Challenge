import i18next from 'i18next';
import {initReactI18next} from "react-i18next";

const resources ={
tr:{
translation :{
    welcome:'hosgeldin'
}
},
en:{
    welcome:'welcome'
}
}
i18n

.use(initReactI18next)
.initReactI18next({
lng:"en",
resources
})

export default i18n