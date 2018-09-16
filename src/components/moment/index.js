import 'moment/locale/pt-br'

import Moment from 'react-moment'
import React from 'react'

export const UnixMoment = ({ children }) => <Moment locale='pt-br' unix fromNow>{children}</Moment>
