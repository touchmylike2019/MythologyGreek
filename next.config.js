const withCSS = require('@zeit/next-css')
const debug = process.env.NODE_ENV !== 'production'

module.exports = withCSS({
    exportPathMap: () => {
        return {
            '/': { page: '/' },
            '/document': { page: '/document' },
            '/about': { page: '/about' },
            "/articles/constellations/galaxies": { page: "/articles/constellations/galaxies" },
            "/articles/constellations/ophiuchus": { page: "/articles/constellations/ophiuchus" },
            "/articles/constellations/orion": { page: "/articles/constellations/orion" },
            "/articles/constellations/taurus": { page: "/articles/constellations/taurus" },
            "/articles/constellations/ursa": { page: "/articles/constellations/ursa" },
            "/articles/godandhuman/cupid": { page: "/articles/godandhuman/cupid" },
            "/articles/godandhuman/helen": { page: "/articles/godandhuman/helen" },
            "/articles/godandhuman/hestia": { page: "/articles/godandhuman/hestia" },
            "/articles/godandhuman/pandora": { page: "/articles/godandhuman/pandora" },
            "/articles/hero/achilles": { page: "/articles/hero/achilles" },
            "/articles/hero/bellerophon": { page: "/articles/hero/bellerophon" },
            "/articles/hero/heracles": { page: "/articles/hero/heracles" },
            "/articles/hero/oedipus": { page: "/articles/hero/oedipus" },
            "/articles/hero/perseus": { page: "/articles/hero/perseus" },
            "/articles/hero/theseus": { page: "/articles/hero/theseus" },
            "/articles/monster/chimera": { page: "/articles/monster/chimera" },
            "/articles/monster/hydra": { page: "/articles/monster/hydra" },
            "/articles/monster/lycaon": { page: "/articles/monster/lycaon" },
            "/articles/monster/medusa": { page: "/articles/monster/medusa" },
            "/articles/monster/sphinx": { page: "/articles/monster/sphinx" },
            "/articles/monster/typhon": { page: "/articles/monster/typhon" },
            "/articles/nature/arachna": { page: "/articles/nature/arachna" },
            "/articles/nature/crown": { page: "/articles/nature/crown" },
            "/articles/nature/delphi": { page: "/articles/nature/delphi" },
            "/articles/nature/echo": { page: "/articles/nature/echo" },
            "/articles/nature/flower": { page: "/articles/nature/flower" },
            "/articles/ocean/charybdis-and-scylla": { page: "/articles/ocean/charybdis-and-scylla" },
            "/articles/ocean/godofocean": { page: "/articles/ocean/godofocean" },
            "/articles/ocean/siren": { page: "/articles/ocean/siren" },
            "/articles/olympus/aphrodite": { page: "/articles/olympus/aphrodite" },
            "/articles/olympus/apollo": { page: "/articles/olympus/apollo" },
            "/articles/olympus/ares": { page: "/articles/olympus/ares" },
            "/articles/olympus/artemis": { page: "/articles/olympus/artemis" },
            "/articles/olympus/athena": { page: "/articles/olympus/athena" },
            "/articles/olympus/atlas": { page: "/articles/olympus/atlas" },
            "/articles/olympus/dimiter": { page: "/articles/olympus/dimiter" },
            "/articles/olympus/dionysus": { page: "/articles/olympus/dionysus" },
            "/articles/olympus/hephaestus": { page: "/articles/olympus/hephaestus" },
            "/articles/olympus/hera": { page: "/articles/olympus/hera" },
            "/articles/olympus/hermes": { page: "/articles/olympus/hermes" },
            "/articles/olympus/olympus-to-olympics": { page: "/document" },
            "/articles/olympus/poseidon": { page: "/articles/olympus/poseidon" },
            "/articles/olympus/zeus": { page: "/articles/olympus/zeus" },
            "/articles/primal/birthgods": { page: "/articles/primal/birthgods" },
            "/articles/primal/emptiness": { page: "/articles/primal/emptiness" },
            "/articles/primal/groundandsky": { page: "/articles/primal/groundandsky" },
            "/articles/primal/titan": { page: "/articles/primal/titan" },
            "/articles/worldofdeath/cerberus": { page: "/articles/worldofdeath/cerberus" },
            "/articles/worldofdeath/hades": { page: "/articles/worldofdeath/hades" },
            "/articles/worldofdeath/kingdom": { page: "/articles/worldofdeath/kingdom" },
            "/articles/worldofdeath/moirae": { page: "/articles/worldofdeath/moirae" },
            "/articles/worldofdeath/orpheus": { page: "/articles/worldofdeath/orpheus" },
            "/articles/worldofdeath/persephone": { page: "/articles/worldofdeath/persephone" },
            "/articles/zodiac/apuarius": { page: "/articles/zodiac/apuarius" },
            "/articles/zodiac/aries": { page: "/articles/zodiac/aries" },
            "/articles/zodiac/cancer": { page: "/articles/zodiac/cancer" },
            "/articles/zodiac/capricorn": { page: "/articles/zodiac/capricorn" },
            "/articles/zodiac/gemini": { page: "/document" },
            "/articles/zodiac/leo": { page: "/articles/zodiac/leo" },
            "/articles/zodiac/libra": { page: "/articles/zodiac/libra" },
            "/articles/zodiac/pisces": { page: "/articles/zodiac/pisces" },
            "/articles/zodiac/sagittarius": { page: "/articles/zodiac/sagittarius" },
            "/articles/zodiac/scorpio": { page: "/articles/zodiac/scorpio" },
            "/articles/zodiac/taurus": { page: "/articles/zodiac/taurus" },
            "/articles/zodiac/virgo": { page: "/articles/zodiac/virgo" },
        }
    },
    assetPrefix: !debug ? '/wtprojects/wtpg24/' : '',
    webpack: config => {
        config.module.rules.push({
            test: /\.(jpg|png|ico|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        context: '',
                        outputPath: 'static',
                        publicPath: '_next/static',
                        name: '[path][name].[hash].[ext]'
                    }
                }
            ]
        })

        return config
    }
})

