/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'nicemoods_common');
fis.set('project.fileType.text', 'vue');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

fis.match('*.{css,png}', {
    useHash: true
});

fis.match('/widget/{*,**/*}.js', {
    isMod: true,
    useHash: true
});

fis.match('/widget/{*,**/*}.vue', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('vue-component', {
            cssScopedFlag: '__vuec__'
        })
    ]
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css'),

    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});


fis.enableES7();