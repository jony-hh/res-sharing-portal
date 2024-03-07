import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig(({ command, mode }) => {
  //获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd())

  return {
    build: {
      rollupOptions: {
        output: {
          // 在这里修改静态资源路径
          chunkFileNames: 'static/assets/js/[name]-[hash].js',
          entryFileNames: 'static/assets/js/[name]-[hash].js',
          assetFileNames: 'static/assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    base: './', // 这里更改打包相对绝对路径
    minify: true, // 是否压缩代码
    sourceMap: true, // 是否生成sourceMap

    plugins: [
      vue(),
      viteMockServe({
        mockPath: './mock', // mock文件存放的位置
        localEnabled: command === 'serve' && mode === 'mock_local', //在开发环境中启用 mock
      }), // elementplus手动按需导入
      ElementPlus({}),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    }, //代理跨域
    server: {
      host: '0.0.0.0',
      port: 8899,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_SERVER, //需要代理跨域
          changeOrigin: true,
          bypass(req, res, options: any) {
            const realUrl =
              options.target + (options.rewrite ? options.rewrite(req.url) : '')
            //console.log(realUrl); // 在终端显示
            res.setHeader('A-Real-Url', realUrl) // 添加响应标头(A-Real-Url为自定义命名)，在浏览器中显示
          },
        },
      },
    },
  }
})
