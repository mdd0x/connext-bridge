import { CgArrowRightR } from 'react-icons/cg'
import { RiCopperCoinLine } from 'react-icons/ri'
import { HiSwitchVertical, HiOutlineDocumentSearch } from 'react-icons/hi'
import { BiCommentDetail } from 'react-icons/bi'

export default
  [
    {
      id: 'bridge',
      title: 'BBridge',
      path: '/',
      others_paths: ['/[bridge]'],
    },
    {
      id: 'pools',
      title: 'BPools',
      path: '/pools',
      others_paths: ['/pool', '/pool/[pool]'],
    },
  ]