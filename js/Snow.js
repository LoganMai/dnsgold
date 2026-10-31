if (!$response || !$response.body) {
    $done({});
} else {
    try {
        var obj = JSON.parse($response.body);
        const ua = ($request && $request.headers && ($request.headers["User-Agent"] || $request.headers["user-agent"])) || "";
        const times = Date.now();

        const list = {
            "iphoneapp.epik": { id: "com.snowcorp.epik.subscribe.plan.oneyear" },
            "iphoneapp.snow": { id: "com.campmobile.snow.subscribe.oneyear" }
        };

        for (const key of Object.keys(list)) {
            if (new RegExp(`^${key}`, "i").test(ua)) {
                obj.result = {
                    "products": [
                        {
                            "managed": true,
                            "status": "ACTIVE",
                            "startDate": times,
                            "productId": list[key].id,
                            "expireDate": 32662137600000
                        }
                    ],
                    "tickets": [
                        {
                            "managed": true,
                            "status": "ACTIVE",
                            "startDate": times,
                            "productId": list[key].id,
                            "expireDate": 32662137600000
                        }
                    ],
                    "activated": true
                };
                break;
            }
        }

        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        $done({});
    }
}
