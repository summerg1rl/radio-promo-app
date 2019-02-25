import { Util } from "./../../common/util/util";

export class Station {
    public id: string;
    public countryId: string;
    public code: string;
    public name: string;
    public languageId: string;
    public formatId: string;
    public location: string;
    public parentGroup: string;
    public website: string;
    public twitter: string;
    public instagram: string;
    public facebook: string;
    public email: string;
    public text: string;
    public phone: string;
    public note: string;
    public active: boolean;
    public deleted: boolean;
    
    [key:string]: any; // Add index signature
    
    public static columnMap: string[] = ["id", "countryId", "code", "name", "languageId", "formatId", "location", "parentGroup", "website", "twitter", "instagram", "facebook", "email", "text", "phone", "note", "active", "deleted"];

    constructor(row: Object[]) {
        for (var i: number = 0; i < Station.columnMap.length; i++) {
            if (!Util.isEmpty(row[i])) {
                var propertyName = Station.columnMap[i];
                this[propertyName] = propertyName == "active" || propertyName == "deleted" ? row[i] === "Y" : row[i].toString();
            }
        }
    }

    public isValid = (): boolean => this.id != null && !this.deleted;
 
}