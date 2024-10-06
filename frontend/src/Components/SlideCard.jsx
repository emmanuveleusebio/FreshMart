import Cards from "./Card"


export default function Slide(){

    const data = [
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-4.jpg',
            title : 'DRINK FRUITS',
        },
         {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-5.jpg',
            title : 'FRESH MEAT',
        }, 
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-2.jpg',
            title : 'DRIED FRUITS',
        },
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-1.jpg',
            title : 'FRESH FRUITS',
        },
        {
            img: 'https://themewagon.github.io/ogani/img/categories/cat-3.jpg',
            title : 'FRESH VEGETABLES',
        },
       
    ]


    return(
      <div className='slideSection'>
          <Cards data={data} type='slide' />
      </div>
    )
}