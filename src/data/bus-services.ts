export class BusServices{
    data:[
        {
            organisation:string;
            date:string;
            busData:[
                {
                    busId:string;
                    routeVariant:string;
                    deviationFromTimeTable:number;
                }
            ];
        }
    ];
}