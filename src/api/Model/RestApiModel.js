import api from '@/api';

class RestApiModel {
  /**
   * Ensure that this is overridden
   * @returns {string}
   */
  static getResourceEndpoint() {
    return '';
  }
  
  static getResourceIdEndpoint(id, append=null) {
    let endpoint = `${this.getResourceEndpoint()}/${id}`;
    if (append) {
      endpoint = endpoint + `/${append}`;
    }

    return endpoint;
  }

  static get(id) {
    return api.get(this.getResourceIdEndpoint(id));
  }

  static list(params = {}) {
    const endpoint = params.endpoint || this.getResourceEndpoint();
    delete params.endpoint;
    return api.get(endpoint, params);
  }

  static async all(opts = {}) {
    const params = opts.params ? opts.params : {};
    params.limit = (params.limit) ? params.limit : 500;
    params.page = 1;

    const rowData = [];
    let total = 0;
    const getPages = (params) => new Promise(async (resolve, reject) => {
      try {
        const { data } = await this.list({params: params, endpoint: opts.endpoint});

        const actions = data.data;

        total = data.meta.total;
        rowData.push(...actions);

        if (rowData.length >= total
            || data.meta.current_page === data.meta.last_page
        ) {
          return resolve(resolveData(rowData, total));
        }

        params.page += 1;
        await getPages(params);
        return resolve(resolveData(rowData, total));
      } catch (error) {
        reject(error);
      }
    });

    const resolveData = function(data, total) {
      return  {
        data: {
          data: data,
          meta: {
            total: total,
          }
        }
      }
    }

    return await getPages(params);
  }
  static create(params) {
    return api.post(this.getResourceEndpoint(), params);
  }
  static validateCreate(params) {
    return api.post(this.getResourceEndpoint() + '/validate', params);
  }
  static update(id, params) {
    return api.patch(this.getResourceIdEndpoint(id), params);
  }
  static delete(id) {
    return api.delete(this.getResourceIdEndpoint(id));
  }
  static restore(id) {
    return api.post(this.getResourceIdEndpoint(id, 'restore'));
  }
  static relationship(relationship, id, params= {}, singleReturn = false) {
    const endpoint = this.getResourceIdEndpoint(id, relationship);
    if (singleReturn) {
      return api.get(endpoint);
    }
    return this.all({params: params, endpoint: endpoint});
  }
}

export default RestApiModel;
