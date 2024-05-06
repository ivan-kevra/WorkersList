import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './Table.module.scss'

import { Typography } from '../typography/Typography'

export type RootProps = ComponentProps<'table'>

export const Root = ({ className, ...rest }: RootProps) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}
export type HeadProps = ComponentProps<'thead'>
export const Head = (props: HeadProps) => {
  return <thead {...props}  />
}
export type BodyProps = ComponentProps<'tbody'>

export const Body = (props: BodyProps) => {
  return <tbody {...props} />
}
export type RowProps = ComponentProps<'tr'>

export const Row = (props: RowProps) => {
  return <tr {...props} className={s.row}/>
}

export type HeadCellProps = ComponentProps<'th'>

export const HeadCell = ({ className, ...rest }: HeadCellProps) => {
  const classNames = {
    headCell: clsx(className, s.headCell),
  }

  return (
    <th className={classNames.headCell}>
      <Typography variant={'subtitle'} {...rest}  />
    </th>
  )
}

export type CellProps = ComponentProps<'td'>

export const Cell = ({ className, ...rest }: CellProps) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return (
    <td className={classNames.cell}>
      <Typography variant={'body'} {...rest} />
    </td>
  )
}

export const Table = {
  Body,
  Cell,
  Head,
  HeadCell,
  Root,
  Row,
}