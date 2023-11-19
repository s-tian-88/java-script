const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // webpack плагин для обработки html-файлов
// const webpack = require('webpack'); // получение доступа ко встроенным плагинам
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "production", // production/developmen
    entry: "./src/index.js", // определения точки входа(можно изменить при небходимости)
    output: { // суказывает на путь и файл вывода(данные соответствуют значениям по умолчанию)
        path: path.resolve(__dirname, 'dist'), // свойство указывает на директорию выхода
        filename: 'main.js' // свойство указывает на файл вывода
    },
    module: {
        rules: [ // правила для обработки файлов типов отличных от JS и JSON
            {
                test: /\.js&/,
                exclude: /node_models/,
                loader: 'babel-loader'
            },
            {
                test: /\.txt$/, // паттерн соответствия обрабатывемого файла(regexp)
                loader: 'raw-loader' // имя загрузчика
            },
            {
                test: /\.css$/,
                use: [ // загрузчики указываются в орвтном порядке
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [ // опция подключения плагинов
        new HtmlWebpackPlugin( //подключение плагина. читаем доку (npm repo project-name)
            {
                template: "./src/index.html", // обрабатываемый файл
                filename: "index.html"
            }
        ),
        new MiniCSSExtractPlugin()
    ]
}

