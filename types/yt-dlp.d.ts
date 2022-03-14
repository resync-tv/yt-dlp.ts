export interface Video {
    id:                     string;
    title:                  string;
    formats:                Format[];
    thumbnails:             Thumbnail[];
    thumbnail:              string;
    description:            string;
    uploader:               string;
    uploader_id:            string;
    uploader_url:           string;
    channel_id:             string;
    channel_url:            string;
    duration:               number;
    view_count:             number;
    average_rating:         null;
    age_limit:              number;
    webpage_url:            string;
    categories:             string[];
    tags:                   string[];
    playable_in_embed:      boolean;
    is_live:                boolean;
    was_live:               boolean;
    live_status:            LiveStatus;
    release_timestamp:      number | null;
    automatic_captions?:    { [key: string]: AutomaticCaption[] };
    subtitles?:             Subtitles;
    chapters:               null;
    upload_date:            string;
    like_count:             number;
    channel:                string;
    channel_follower_count: number;
    availability:           Availability;
    original_url:           string;
    webpage_url_basename:   WebpageURLBasename;
    webpage_url_domain:     WebpageURLDomain;
    extractor:              Extractor;
    extractor_key:          ExtractorKey;
    playlist:               null;
    playlist_index:         null;
    display_id:             string;
    fulltitle:              string;
    duration_string:        string;
    requested_subtitles:    null;
    __has_drm:              boolean;
    requested_downloads:    RequestedDownload[];
    requested_formats:      Format[];
    format:                 string;
    format_id:              string;
    ext:                    AudioEXTEnum;
    protocol:               VideoProtocol;
    language:               null;
    format_note:            string;
    filesize_approx:        number;
    tbr:                    number;
    width:                  number;
    height:                 number;
    resolution:             string;
    fps:                    number;
    dynamic_range:          DynamicRange;
    vcodec:                 Vcodec;
    vbr:                    number;
    stretched_ratio:        null;
    acodec:                 Acodec;
    abr:                    number;
    asr:                    number;
    epoch:                  number;
    _type:                  Type;
    album?:                 string;
    artist?:                string;
    track?:                 string;
    release_date?:          string;
    release_year?:          number;
    creator?:               string;
    alt_title?:             string;
}

export enum Type {
    Video = "video",
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

export enum Availability {
    NeedsAuth = "needs_auth",
    Public = "public",
}

export enum DynamicRange {
    Hdr10 = "HDR10",
    SDR = "SDR",
}

export enum AudioEXTEnum {
    M4A = "m4a",
    Mhtml = "mhtml",
    Mp4 = "mp4",
    None = "none",
    The3Gp = "3gp",
    Webm = "webm",
}

export enum Extractor {
    Youtube = "youtube",
}

export enum ExtractorKey {
    Youtube = "Youtube",
}

export interface Format {
    format_id:            string;
    format_note:          string;
    ext:                  AudioEXTEnum;
    protocol:             FormatProtocol;
    acodec:               Acodec;
    vcodec:               string;
    url:                  string;
    width:                number | null;
    height:               number | null;
    fragments?:           Fragment[];
    audio_ext:            AudioEXTEnum;
    video_ext:            AudioEXTEnum;
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
    preference?:          number | null;
    dynamic_range?:       DynamicRange | null;
    abr?:                 number;
    downloader_options?:  DownloaderOptions;
    container?:           Container;
    vbr?:                 number;
    filesize_approx?:     number;
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
    "User-agent":      string;
    Accept:            Accept;
    "Accept-encoding": AcceptEncoding;
    "Accept-language": AcceptLanguage;
    "Sec-fetch-mode":  SECFetchMode;
}

export enum Accept {
    TextHTMLApplicationXHTMLXMLApplicationXMLQ09Q08 = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}

export enum AcceptEncoding {
    GzipDeflateBr = "gzip, deflate, br",
}

export enum AcceptLanguage {
    EnUsEnQ05 = "en-us,en;q=0.5",
}

export enum SECFetchMode {
    Navigate = "navigate",
}

export enum FormatProtocol {
    HTTPS = "https",
    Mhtml = "mhtml",
}

export enum LiveStatus {
    NotLive = "not_live",
    WasLive = "was_live",
}

export enum VideoProtocol {
    HTTPSHTTPS = "https+https",
}

export interface RequestedDownload {
    requested_formats:        Format[];
    format:                   string;
    format_id:                string;
    ext:                      AudioEXTEnum;
    protocol:                 VideoProtocol;
    format_note:              string;
    filesize_approx:          number;
    tbr:                      number;
    width:                    number;
    height:                   number;
    resolution:               string;
    fps:                      number;
    dynamic_range:            DynamicRange;
    vcodec:                   Vcodec;
    vbr:                      number;
    acodec:                   Acodec;
    abr:                      number;
    asr:                      number;
    epoch:                    number;
    _filename:                string;
    __write_download_archive: boolean;
}

export enum Vcodec {
    Avc1640028 = "avc1.640028",
    Vp9 = "vp9",
    Vp92 = "vp9.2",
}

export interface Subtitles {
    af?:        AutomaticCaption[];
    sq?:        AutomaticCaption[];
    am?:        AutomaticCaption[];
    ar?:        AutomaticCaption[];
    hy?:        AutomaticCaption[];
    az?:        AutomaticCaption[];
    bn?:        AutomaticCaption[];
    eu?:        AutomaticCaption[];
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
    ht?:        AutomaticCaption[];
    haw?:       AutomaticCaption[];
    iw?:        AutomaticCaption[];
    hi?:        AutomaticCaption[];
    hu?:        AutomaticCaption[];
    is?:        AutomaticCaption[];
    ig?:        AutomaticCaption[];
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
    mr?:        AutomaticCaption[];
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
    pa?:        AutomaticCaption[];
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
    sw?:        AutomaticCaption[];
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
    fy?:        AutomaticCaption[];
    yi?:        AutomaticCaption[];
    zu?:        AutomaticCaption[];
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
    resolution?: Resolution;
}

export enum Resolution {
    The120X90 = "120x90",
    The1280X720 = "1280x720",
    The168X94 = "168x94",
    The1920X1080 = "1920x1080",
    The196X110 = "196x110",
    The246X138 = "246x138",
    The320X180 = "320x180",
    The336X188 = "336x188",
    The480X360 = "480x360",
    The640X480 = "640x480",
}

export enum WebpageURLBasename {
    Watch = "watch",
}

export enum WebpageURLDomain {
    YoutubeCOM = "youtube.com",
}
