import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

type Props<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  variant:
    | 'body'
    | 'h1'
    | 'h2'
    | 'subtitle'
}

export const Typography = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { as, className, variant = 'body', ...rest } = props

  const Component = as || 'p'
  const classNames = clsx(s[variant], className)

  return <Component className={classNames} {...rest} />
}