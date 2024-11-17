type Platform = "windows" | "linux" | "macos" | "nintendo";

type CarouselsResponse = {
  id: number,
  items: Array<CarouselItems> | []
  timestamp: number
}

type CarouselResponse = {
  timestamp: number,
  type: string,
  title: string,
  page: number,
  totalPage: number,
  count: number,
  items: Array<CarouselItem>
}

type CarouselItems = { 
  id: number, 
  auto_run: boolean, 
  title: string, 
  type: string, 
  data: Array<CarouselItem> | []

  path?: string, 
  url?: string, 
  image_url?: string, 
}

type CarouselItem = {
  id: number,
  author: string,
  title: string,
  description: string,
  tags: Array<string>,
  price: string,
  available_platforms: Array<Platform>
  primary_image: string,
  in_wishlist: boolean,
  purchased: false,

  sub_images?: Array<string>,
  sale_price?: string,
}
