/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    let position = [0,0,0];
    for (let i=0; i<instructions.length; i++) {
        switch (instructions[i]) {
            case('G'):
                switch (position[2]) {
                    case(0):
                        position[1]++;
                        break;
                    case(1):
                        position[0]++;
                        break;
                    case(2):
                        position[1]--;
                        break;
                    case(3):
                        position[0]--;
                        break;
                }
                break;
            case('L'):
                position[2] = position[2] === 0 ? 3 : position[2] - 1;
                break;
            case('R'):
                position[2] = position[2] === 3 ? 0 : position[2] + 1;
                break;
        }
    }
    if ((position[0] === 0 && position[1] === 0 && position[2] === 0) || position[2] !== 0) return true;
    return false;
};

console.log(isRobotBounded('GGLLLL'));