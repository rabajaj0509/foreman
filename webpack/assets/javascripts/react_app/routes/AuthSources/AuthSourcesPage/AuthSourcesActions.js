import { AUTH_SOURCES_TABLE_DATA } from './AuthSourcesConstants';

export const fetchTableData = () => ({
  type: AUTH_SOURCES_TABLE_DATA,
  payload: {
    total: 1,
    subtotal: 1,
    page: 1,
    per_page: 20,
    search: null,
    sort: {
      by: null,
      order: null,
    },
    results: [
      {
        host: 'lsjfdisdjf',
        port: 389,
        account: '',
        base_dn: '',
        ldap_filter: '',
        attr_login: 'uid',
        attr_firstname: 'givenName',
        attr_lastname: 'sn',
        attr_mail: 'mail',
        attr_photo: 'jpegPhoto',
        onthefly_register: false,
        usergroup_sync: true,
        tls: false,
        server_type: 'posix',
        groups_base: '',
        use_netgroups: false,
        created_at: '2020-05-06 17:58:19 +0530',
        updated_at: '2020-05-06 17:58:19 +0530',
        id: 4,
        type: 'AuthSourceLdap',
        name: 'ldap',
        locations: [
          {
            id: 2,
            name: 'Default Location',
            title: 'Default Location',
            description: null,
          },
        ],
        organizations: [
          {
            id: 1,
            name: 'Default Organization',
            title: 'Default Organization',
            description: null,
          },
        ],
      },
    ],
  },
});
