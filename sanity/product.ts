
export const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
      {
          name: 'title',
          type: 'string',
          title: 'Title',
      },
      {
          name: 'description',
          type: 'string',
          title: 'Description'
      },
     
      {
          name:'price',
          type: 'number',
          title: 'Price',
      },
   
      {
          name: 'image',
          type: 'image',
          title: 'Product Image',
          options: {
              hotspot: true // Enables cropping and focal point selection
          }
      }
  ]
}
