/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let rooms = [];
    for (let i=0; i<intervals.length; i++) {
        if (rooms.length === 0) {
            rooms.push(intervals[i])
            continue;
        };
        let foundRoom = false;
        let desiredRoom;
        rooms.forEach((room, idx) => {
            if ((room[1] <= intervals[i][0] && !foundRoom) || (foundRoom && room[1] <= intervals[i][0] && rooms[desiredRoom][1] < room[1])) {
                foundRoom = true;
                desiredRoom = idx;
            }
        });
        if (foundRoom) {
            rooms[desiredRoom][1] = intervals[i][1];
        } else {
            rooms.push(intervals[i]);
        }
    }
    return rooms.length;
};

/* Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2 */

let intervals = [[0,30],[5,10],[15,20]];
console.log(minMeetingRooms(intervals));