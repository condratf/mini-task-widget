import { FC } from 'react'
import downIc from 'src/shared/assets/angle-down.svg'
import upIc from 'src/shared/assets/angle-up.svg'
import bookIc from 'src/shared/assets/book.svg'
import bookOkIc from 'src/shared/assets/book-ok.svg'

type IconProps = {
  name: 'down' | 'up' | 'book' | 'bookOk'
} & React.HTMLAttributes<HTMLImageElement>

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  return {
    down: <img src={downIc} alt="collapse" width={22} height={22} {...props} />,
    up: <img src={upIc} alt="expand" width={22} height={22} {...props} />,
    book: <img src={bookIc} alt="book" width={22} height={22} {...props} />,
    bookOk: <img src={bookOkIc} alt="book-ok" width={22} height={22} {...props} />
  }[name]
}
