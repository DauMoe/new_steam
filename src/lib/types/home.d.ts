type StoreType = {
  id: number,
  items: Array<StoreItem>
  timestamp: number
}

type StoreItem = { id: number, image_url: string, path: string, auto_run: boolean, title: string, type: string, url?: string, data: CarouselItem[] }

type CarouselItem = {}
