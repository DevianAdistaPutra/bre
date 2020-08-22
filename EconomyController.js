const Enmap = require('enmap');
const balancesDatabase = new Enmap({ name: 'balances' });

class EconomyController {
  constructor(bot) {
    bot.balances = balancesDatabase;
    this._client = bot;
  }
  
  getBalance(userID) {
    this._client.balances.ensure(userID, { id: userID, balance: null, work: '', date: new Date(), criminal: [] });
    
    const db = this._client.balances.get(userID);
    return db.balance ? db.balance : '0';
  }
  
  getWork(userID) {
    this._client.balances.ensure(userID, { id: userID, balance: null, work: '', date: new Date(), criminal: [] });
    const db = this._client.balances.get(userID);
    return db.work === '' ? 'Pengangguran' : db.work;
  }
  
  getCriminal(userID) {
    let returnData = '';
    this._client.balances.ensure(userID, { id: userID, balance: null, work: '', date: new Date(), criminal: [] });
    const db = this._client.balances.get(userID);
    if (db.criminal === []) {
      returnData += 'Tidak pernah melakukan kriminalitas';
    } else returnData += db.criminal.join(', ');
    
    return returnData;
  }
  
  setCriminal(userID, workNum) 
  {
    let num = Math.floor(Math.random() * 5);
    this._client.balances.ensure(userID, { id: userID, balance: null, work: '', date: new Date(), criminal: [] });
    
    let workAvailable = [
      'Mencuri',
      'Pemerkosaan',
      'Klinik Ilegal',
      'Peretasan',
      'Aborsi Janin', // this is array do not string but array string.
      
    ];
    
   this._client.balances.get(userID).criminal.push(workAvailable[num]);
   const nowDB = this._client.balances.get(userID);
  this._client.balances.set(userID, nowDB);
    
    return true;
  }
  
}

module.exports = EconomyController;