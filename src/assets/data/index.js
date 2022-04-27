const zips = require('./zips.json');
const eligibility = require('./eligibility.json');
const rentcap = require('./rentcap.json');

export function eligibilityLookup(city) {
    let rules = {};

    Object.entries(eligibility).map(([k, v]) => {
        if (k === city) {
            rules = v;
        }
    });

    return rules;
}

export function rentcapLookup(city, dateStr) {
    let date = new Date(dateStr);
    let rate = 0;

    Object.entries(rentcap).map(([k, ranges]) => {
        if (k === city) {
            Object.entries(ranges).map(([i, range]) => {
                var start = new Date(range.start);
                var end = new Date(range.end);
                if (date >= start && date <= end) {
                    rate = range.rate;
                }
            });
        }
    });

    return rate;
}

export function zipLookup(zipcode) {
    let city = "";

    Object.entries(zips).map(([k, v]) => {
        if (k === zipcode) {
            city = v.city;
        }
        return null;
    });

    return city;
}