
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
                callback(null, require('./component/master').default);
            })
        }
    },
{
     path:"/style",
        getComponents(location, callback) {
            require.ensure([], (require) => {
                callback(null, require('./component/test-style').default);
            })
        }
}

]

export default routs;