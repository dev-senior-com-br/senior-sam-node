export abstract class BaseModel {
  toJsonString(): string {
    let json = JSON.stringify(this);
    Object.keys(this)
      .filter(key => key[0] === '_')
      .forEach(key => {
        json = json.replace(key, key.substring(1));
      });

    Object.values(this).forEach(value => {
      if (typeof value === 'object') {
        Object.keys(value)
          .filter(key => key[0] === '_')
          .forEach(key => {
            json = json.replace(key, key.substring(1));
          });
      }
    });
    json = this.replaceArray(json);
    return json;
  }

  replaceArray(json: string): string {
    const jsonObj = JSON.parse(json);
    Object.values(jsonObj).forEach(value => {
      if (this.isArray(value)) {
        const jsonArray = JSON.parse(JSON.stringify(value));
        for (let i = 0; i < jsonArray.length; i++) {
          console.log(jsonArray[i]);
          Object.keys(jsonArray[i]).forEach(key => {
            json = json.replace(key, key.substring(1));
          });
        }
      }
    });

    return json;
  }

  toJson(): any {
    return JSON.parse(this.toJsonString());
  }

  private isArray(what) {
    return '' + what === '[object Object]';
  }
}
