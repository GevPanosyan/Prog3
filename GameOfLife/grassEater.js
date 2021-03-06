var LivingCreature = require("./LivingCreature");
var random = require("./random");

module.exports = class Eatgrass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 15;
        this.directions = [];
    }

    //շրջապատի հետազոտության մատրիցը
    newDirections() {
        if (weatherType == "Ձմեռ") {
            this.directions = [
                [this.x - 2, this.y - 2],
                [this.x, this.y - 2],
                [this.x + 2, this.y - 2],
                [this.x - 2, this.y],
                [this.x + 2, this.y],
                [this.x - 2, this.y + 2],
                [this.x, this.y + 2],
                [this.x + 2, this.y + 2]
            ];
        } else {
            this.directions = [
                [this.x - 2, this.y - 2],
                [this.x, this.y - 2],
                [this.x + 2, this.y - 2],
                [this.x - 2, this.y],
                [this.x + 2, this.y],
                [this.x - 2, this.y + 2],
                [this.x, this.y + 2],
                [this.x + 2, this.y + 2]
            ];
        }
    }

    //move() շարժվել
    move() {
        //որոնում է դատարկ տարածքներ
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;

        }
    }

    //eat()-ուտել
    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;
            grassEaterHashiv++;
            //մեծացնում է էներգիան
            this.energy+=2;

            //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
            //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ grassArr
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if(weatherType=="Ձմեռ"){
                if (this.multiply == 3) {
                    this.mul()
                    this.multiply = 0;
                }
            }else{
                if (this.multiply == 5) {
                    this.mul()
                    this.multiply = 0;
                }
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy--;
            if (this.energy < 3) { //մահանում է, եթե էներգիան 3֊ից ցածր է
                this.die();
            }
        }
    }

    //mul() բազմանալ
    mul() {
        //փնտրում է դատարկ տարածք
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        //եթե կա բազմանում է
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var newGrasseater = new Eatgrass(x, y);
            eatArr.push(newGrasseater);
            grassEaterHashiv++;

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }

    //die() մահանալ
    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        if (weather == "Ձմեռ") {
            matrix[this.y][this.x] = 4;
        } else {
            matrix[this.y][this.x] = 0;
        }

        //!!! ԿԱՐԵՎՈՐ !!! ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }
}