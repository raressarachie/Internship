export class Invoice{
  constructor(private _id, private _total: number,private _client: string,private _date: Date){}

  get id(){
    return this._id;
}

  get total(){
      return this._total;
  }

  get client(){
      return this._client;
  }

  get date(){
      return this._date;
  }


}

