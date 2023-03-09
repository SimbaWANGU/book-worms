interface SwiperViewProps {
  src: any
  textArray?: string[]
}

interface gridViewProps {
  src: any
  subHeading: string
  gradientColor: string
}

interface sideBarButton {
  to: string
  icon: 'home' | 'search1'
}

interface GenreFilterItemProps {
  genre: string
  onPress: (genre: string) => void
  selected: boolean
}

export type { SwiperViewProps, gridViewProps, sideBarButton, GenreFilterItemProps }
