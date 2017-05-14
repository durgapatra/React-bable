
const routs = [
    {
        path: "/hi",
        getComponents(location, callback) {
            require.ensure([], (require) => {
                callback(null, require('./component/home').default);
            })
        }
    },

    {
        path:"/",
        getComponents(location, callback) {
            require.ensure([], (require) => {
                callback(null, require('./component/center-box').default);
            })
        }
    },
{
     path:"/style",
        getComponents(location, callback) {
            require.ensure([], (require) => {
                callback(null, require('./component/style-input-box').default);
            })
        }
}

]

export default routs;