export default class RealtyService {
  _apiBase = 'http://134.209.138.34';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    const body = await res.json();
    return body;
  }

  getAllItems = async () => {
    const res = await this.getResource('/items');
    return res.map(this._transformItem);
  }

  getItem = async (id) => {
    const res = await this.getResource(`/item/${id}`);
    return res[0];
  }

  _separateText(str) {
    const separatedText = str.split('')
      .reduce((acc, el, i, arr) => {
        acc.push(el);

        if (el === ',' && arr[i + 1] && arr[i + 1] !== ' ' ) {
          acc.push(' ');
        }

        return acc;
      }, [])
      .join('');

    return separatedText;
  };

  _transformItem = (item) => {
    return {
      id: item.id,
      address: this._separateText(item.address),
      title: this._separateText(item.title),
      previewImage: item.previewImage,
      price: item.price,
    };
  }
}
