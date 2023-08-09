import lang_en_US        from '../lang/en-US'
import * as Localization from 'expo-localization'
import { I18n }          from 'i18n-js'

const i18n = new I18n({
  en: lang_en_US,
})

i18n.locale = Localization.locale
i18n.enableFallback = true

export default function t(key){
  return i18n.t(key)
}
