/**
 * Watch options for the core watcher
 * @type {{files: string[], ignored: string[]}}
 */
const watchOptions = {};

/**
 * Watch any custom files and trigger a rebuild
 */
function development() {
    // placeholder to get `stencil bundle` to run
    process.send('reload');
}

/**
 * Hook into the `stencil bundle` command and build your files before they are packaged as a .zip
 */
function production() {
    // placeholder to get `stencil bundle` to run
    process.send('done');
}

if (process.send) {
    // running as a forked worker
    process.on('message', message => {
        if (message === 'development') {
            development();
        }

        if (message === 'production') {
            production();
        }
    });

    process.send('ready');
}
