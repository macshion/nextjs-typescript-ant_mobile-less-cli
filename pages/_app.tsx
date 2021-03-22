import { AppProps } from 'next/app'
import '@/style/reset.less'
import { AppProvider } from '@/lib/context'
import { useStore } from '@/lib/store'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps):React.ReactElement {
    const store = useStore(pageProps.initialReduxState)
    return <Provider store={store}>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
  </Provider>
}
