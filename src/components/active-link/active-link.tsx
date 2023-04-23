import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren, useState, useEffect } from 'react'
import styles from './active-link.module.scss';

type ActiveLinkProps = LinkProps & {
  className?: string;
}

const ActiveLink = ({
  children,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const router = useRouter();

  return (
    <Link className={`${className ?? ''} ${router.pathname === props.href && router.pathname !== '/teaser' ? styles.active : ''}`} {...props}>
      {children}
    </Link>
  )
}

export default ActiveLink;