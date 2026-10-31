/* BeautyPlus Unlock */
if (!$response || !$response.body) {
    $done({});
} else {
    try {
        var objc = JSON.parse($response.body);
        objc.vip_expires_date = 4071600000;
        objc.message = "success";
        objc.data = Object.assign({}, objc.data || {}, {
            "points": 999999999,
            "next_claim": 1,
            "gid": "2641810920",
            "balance": 999999999,
            "created_at": 1707331696
        });
        $done({ body: JSON.stringify(objc) });
    } catch (e) {
        $done({});
    }
}
