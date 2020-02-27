module.exports = {
    stories: ['../src/docs/**/*.stories.js'],
    // stories: ['../src/**/*.stories.js'],
    addons: [
        {
            name: '@storybook/preset-create-react-app',
            options: {
                craOverrides: {
                    fileLoaderExcludes: ['less'],
                },
            },
        },
        '@storybook/preset-ant-design',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs',
    ],
}
