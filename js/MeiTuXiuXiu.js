/*
Chức năng: Mở khóa VIP cao cấp Meitu Xiuxiu (Đã giải mã, xóa vòng lặp debugger & bọc try-catch an toàn)
Link App: https://apps.apple.com/cn/app/%E7%BE%8E%E5%9B%BE%E7%A7%80%E7%A7%80/id416048305
*/

if (!$response || !$response.body) {
    $done({});
} else {
    try {
        var body = $response.body;
        var url = $request.url || "";

        if (url.indexOf('/v1/user/show.json') !== -1) {
            body = body
                .replace(/\"free_trial\"\:\d+/g, '"free_trial":1')
                .replace(/\"vip_type\"\:\d+/g, '"vip_type":1')
                .replace(/\"screen_name\"\:\".*?\"/g, '"screen_name":"VIP"');
        } else if (url.indexOf('/v1/vip/prompt/query.json') !== -1) {
            body = body
                .replace(/\"home_prompt\"\:\".*?\"/g, '"home_prompt":"您的会员将于2030/01/01过期。"')
                .replace(/\"home_btn_prompt\"\:\".*?\"/g, '"home_btn_prompt":"立即查看"')
                .replace(/\"beautify_btn_prompt\"\:\".*?\"/g, '"beautify_btn_prompt":""')
                .replace(/\"beautify_prompt\"\:\".*?\"/g, '"beautify_prompt":""');
        } else {
            var obj = JSON.parse(body);
            obj.data = obj.data || {};

            if (url.indexOf('/v1/h5/vip/sub_detail.json') !== -1) {
                obj.data.valid_time = 1642350722;
                obj.data.is_expire = 0;
                obj.data.old_vip_type = 4;
                obj.data.expire_days = -999;
                obj.data.renew = 1;
                obj.data.exchange_vip = 0;
                obj.data.screen_name = "VIP";
                obj.data.invalid_time = 1893430861;
                body = JSON.stringify(obj);
            } else if (url.indexOf('/v1/h5/vip/user_detail.json') !== -1) {
                obj.data.valid_time = 1642350722;
                obj.data.is_expire = 0;
                obj.data.old_vip_type = 4;
                obj.data.sub_type = 8;
                obj.data.show_auto_renew = 0;
                obj.data.expire_days = -999;
                obj.data.renew = 1;
                obj.data.exchange_vip = 0;
                obj.data.screen_name = "VIP";
                obj.data.invalid_time = 1893430861;
                body = JSON.stringify(obj);
            } else if (url.indexOf('/v1/vip/vip_show.json') !== -1) {
                obj.data.id = 6888888888888888000;
                obj.data.id_str = "6888888888888888888";
                obj.data.valid_time = 1642350000;
                obj.data.sub_type = 3;
                obj.data.sub_biz_type = 1;
                obj.data.avatar_url = "http://maavatar1.meitudata.com/a14872cb2e0273a0aa04c0d7674fa457.png";
                obj.data.is_expire = 0;
                obj.data.expire_days = -999;
                obj.data.gid = 2500000000;
                obj.data.vip_type = 101;
                obj.data.platform = 2;
                obj.data.sub_name = "包年";
                obj.data.renew = 2;
                obj.data.s = 1;
                obj.data.is_valid_user = 1;
                obj.data.create_time = 1642350000;
                obj.data.screen_name = "VIP";
                obj.data.in_valid_time = 1893430861;
                body = JSON.stringify(obj);
            } else if (url.indexOf('/v1/account/verify_credentials.json') !== -1) {
                obj.data.vip_type = 1;
                obj.data.screen_name = "VIP";
                obj.data.free_trial = 1;
                body = JSON.stringify(obj);
            }
        }

        $done({ body: body });
    } catch (e) {
        $done({});
    }
}
