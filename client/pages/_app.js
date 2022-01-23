import 'bootstrap/dist/css/bootstrap.css'
// this is the global config for next js pages
export default ({Component, pageProps}) => {
    return <Component {...pageProps} />
}