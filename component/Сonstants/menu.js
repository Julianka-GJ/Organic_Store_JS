const dataMenu = [
    { type: 'listMenu', text: 'Home', inside: false },
    { type: 'listMenu', text: 'About Us', inside: false },
    {
      type: 'listMenu', text: 'Shop', inside: true, items: [
        { type: 'listSub', text: 'Vegetable' },
        { type: 'listSub', text: 'Millets' },
        { type: 'listSub', text: 'Fruits' },
        { type: 'listSub', text: 'Millets' }
      ]
    },
    {
      type: 'listMenu', text: 'Pages', inside: true, items: [
        { type: 'listSub', text: 'Style Guide' },
        { type: 'listSub', text: 'Protected' },
        { type: 'listSub', text: 'Licenses' },
        { type: 'listSub', text: 'Changelog' }
      ]
    },
    { type: 'listMenu', text: 'Contact Us', inside: false },
  ];