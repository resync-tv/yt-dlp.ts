export interface Video {
    id:                   string;
    title:                string;
    formats:              Format[];
    thumbnails:           Thumbnail[];
    thumbnail:            string;
    description:          string;
    upload_date:          string;
    uploader:             string;
    uploader_id:          string;
    uploader_url:         string;
    channel_id:           string;
    channel_url:          string;
    duration:             number;
    view_count:           number;
    average_rating:       number;
    age_limit:            number;
    webpage_url:          string;
    categories:           string[];
    tags:                 string[];
    playable_in_embed:    boolean;
    is_live:              boolean;
    was_live:             boolean;
    live_status:          string;
    release_timestamp:    number | null;
    automatic_captions?:  { [key: string]: AutomaticCaption[] };
    subtitles?:           Subtitles;
    chapters:             null;
    like_count:           number;
    channel:              string;
    availability:         string;
    original_url:         string;
    webpage_url_basename: string;
    extractor:            string;
    extractor_key:        string;
    playlist:             null;
    playlist_index:       null;
    display_id:           string;
    duration_string:      string;
    requested_subtitles:  null;
    __has_drm:            boolean;
    requested_formats:    Format[];
    format:               string;
    format_id:            string;
    ext:                  VideoEXTEnum;
    protocol:             string;
    language:             null;
    format_note:          string;
    filesize_approx:      number;
    tbr:                  number;
    width:                number;
    height:               number;
    resolution:           string;
    fps:                  number;
    dynamic_range:        DynamicRange;
    vcodec:               string;
    vbr:                  number;
    stretched_ratio:      null;
    acodec:               Acodec;
    abr:                  number;
    asr:                  number;
    epoch:                number;
    album?:               string;
    artist?:              string;
    track?:               string;
    release_date?:        string;
    release_year?:        number;
    creator?:             string;
    alt_title?:           string;
}

export enum Acodec {
    Mp4A402 = "mp4a.40.2",
    Mp4A405 = "mp4a.40.5",
    None = "none",
    Opus = "opus",
}

export interface AutomaticCaption {
    ext:  AutomaticCaptionEXT;
    url:  string;
    name: string;
}

export enum AutomaticCaptionEXT {
    Json3 = "json3",
    Srv1 = "srv1",
    Srv2 = "srv2",
    Srv3 = "srv3",
    Ttml = "ttml",
    Vtt = "vtt",
}

export enum DynamicRange {
    Hdr10 = "HDR10",
    SDR = "SDR",
}

export enum VideoEXTEnum {
    M4A = "m4a",
    Mhtml = "mhtml",
    Mp4 = "mp4",
    None = "none",
    The3Gp = "3gp",
    Webm = "webm",
}

export interface Format {
    format_id:            string;
    format_note:          string;
    ext:                  VideoEXTEnum;
    protocol:             Protocol;
    acodec:               Acodec;
    vcodec:               string;
    url:                  string;
    width:                number | null;
    height:               number | null;
    fragments?:           Fragment[];
    audio_ext:            AudioEXT;
    video_ext:            VideoEXTEnum;
    format:               string;
    resolution:           string;
    http_headers:         HTTPHeaders;
    asr?:                 number | null;
    filesize?:            number | null;
    source_preference?:   number;
    fps?:                 number | null;
    quality?:             number;
    tbr?:                 number;
    language?:            string;
    language_preference?: number;
    dynamic_range?:       DynamicRange | null;
    abr?:                 number;
    downloader_options?:  DownloaderOptions;
    container?:           Container;
    vbr?:                 number;
    filesize_approx?:     number;
}

export enum AudioEXT {
    M4A = "m4a",
    None = "none",
    Webm = "webm",
}

export enum Container {
    M4ADash = "m4a_dash",
    Mp4Dash = "mp4_dash",
    WebmDash = "webm_dash",
}

export interface DownloaderOptions {
    http_chunk_size: number;
}

export interface Fragment {
    path:     string;
    duration: number;
}

export interface HTTPHeaders {
    "User-Agent":      string;
    "Accept-Charset":  AcceptCharset;
    Accept:            Accept;
    "Accept-Encoding": AcceptEncoding;
    "Accept-Language": AcceptLanguage;
}

export enum Accept {
    TextHTMLApplicationXHTMLXMLApplicationXMLQ09Q08 = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

export enum AcceptCharset {
    ISO88591UTF8Q07Q07 = "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
}

export enum AcceptEncoding {
    GzipDeflate = "gzip, deflate",
}

export enum AcceptLanguage {
    EnUsEnQ05 = "en-us,en;q=0.5",
}

export enum Protocol {
    HTTPS = "https",
    Mhtml = "mhtml",
}

export interface Subtitles {
    sq?:        AutomaticCaption[];
    am?:        AutomaticCaption[];
    ar?:        AutomaticCaption[];
    hy?:        AutomaticCaption[];
    az?:        AutomaticCaption[];
    bn?:        AutomaticCaption[];
    bs?:        AutomaticCaption[];
    bg?:        AutomaticCaption[];
    my?:        AutomaticCaption[];
    yue?:       AutomaticCaption[];
    "yue-HK"?:  AutomaticCaption[];
    ca?:        AutomaticCaption[];
    "zh-HK"?:   AutomaticCaption[];
    "zh-CN"?:   AutomaticCaption[];
    "zh-Hans"?: AutomaticCaption[];
    "zh-Hant"?: AutomaticCaption[];
    "zh-TW"?:   AutomaticCaption[];
    hr?:        AutomaticCaption[];
    cs?:        AutomaticCaption[];
    da?:        AutomaticCaption[];
    nl?:        AutomaticCaption[];
    "nl-BE"?:   AutomaticCaption[];
    en?:        AutomaticCaption[];
    eo?:        AutomaticCaption[];
    et?:        AutomaticCaption[];
    fo?:        AutomaticCaption[];
    fil?:       AutomaticCaption[];
    fi?:        AutomaticCaption[];
    fr?:        AutomaticCaption[];
    "fr-CA"?:   AutomaticCaption[];
    gl?:        AutomaticCaption[];
    ka?:        AutomaticCaption[];
    de?:        AutomaticCaption[];
    el?:        AutomaticCaption[];
    gu?:        AutomaticCaption[];
    iw?:        AutomaticCaption[];
    hi?:        AutomaticCaption[];
    hu?:        AutomaticCaption[];
    is?:        AutomaticCaption[];
    id?:        AutomaticCaption[];
    ga?:        AutomaticCaption[];
    it?:        AutomaticCaption[];
    ja?:        AutomaticCaption[];
    kn?:        AutomaticCaption[];
    kk?:        AutomaticCaption[];
    km?:        AutomaticCaption[];
    ko?:        AutomaticCaption[];
    ku?:        AutomaticCaption[];
    ky?:        AutomaticCaption[];
    la?:        AutomaticCaption[];
    lv?:        AutomaticCaption[];
    lt?:        AutomaticCaption[];
    lb?:        AutomaticCaption[];
    mk?:        AutomaticCaption[];
    ms?:        AutomaticCaption[];
    ml?:        AutomaticCaption[];
    mn?:        AutomaticCaption[];
    ne?:        AutomaticCaption[];
    no?:        AutomaticCaption[];
    or?:        AutomaticCaption[];
    fa?:        AutomaticCaption[];
    "fa-IR"?:   AutomaticCaption[];
    pl?:        AutomaticCaption[];
    pt?:        AutomaticCaption[];
    "pt-BR"?:   AutomaticCaption[];
    "pt-PT"?:   AutomaticCaption[];
    ro?:        AutomaticCaption[];
    ru?:        AutomaticCaption[];
    sr?:        AutomaticCaption[];
    "sr-Cyrl"?: AutomaticCaption[];
    "sr-Latn"?: AutomaticCaption[];
    si?:        AutomaticCaption[];
    sk?:        AutomaticCaption[];
    sl?:        AutomaticCaption[];
    es?:        AutomaticCaption[];
    "es-419"?:  AutomaticCaption[];
    "es-MX"?:   AutomaticCaption[];
    "es-US"?:   AutomaticCaption[];
    sv?:        AutomaticCaption[];
    tg?:        AutomaticCaption[];
    ta?:        AutomaticCaption[];
    te?:        AutomaticCaption[];
    th?:        AutomaticCaption[];
    tr?:        AutomaticCaption[];
    uk?:        AutomaticCaption[];
    ur?:        AutomaticCaption[];
    uz?:        AutomaticCaption[];
    vi?:        AutomaticCaption[];
    yi?:        AutomaticCaption[];
    live_chat?: LiveChat[];
}

export interface LiveChat {
    url:      string;
    video_id: string;
    ext:      string;
    protocol: string;
}

export interface Thumbnail {
    url:         string;
    preference:  number;
    id:          string;
    height?:     number;
    width?:      number;
    resolution?: string;
}
