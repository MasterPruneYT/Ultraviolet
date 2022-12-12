self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Hurricane.codec.xor.encode,
    decodeUrl: Hurricane.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};