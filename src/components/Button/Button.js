import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default function Button({
	children,
	className,
	color,
	fill,
	href,
	isDisabled,
	isLoading,
	size,
	...rest
}) {
	isDisabled = isLoading ? true : isDisabled
	const classes = cn('c-button', className, {
		'c-button--fill': fill
	})

	if (href && !isDisabled) {
		return (
			<a
				className={classes}
				href={href}
				{...rest}
			>
				<span className="c-button__content">
					<span className="c-button__text">{children}</span>
				</span>
			</a>
		)
	} else {
		return (
			<button
				disabled={isDisabled}
				className={classes}
				{...rest}
			>
				<span className="c-button__content">
					<span className="c-button__text">{children}</span>
				</span>
			</button>
		)
	}
}

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	color: PropTypes.string,
	fill: PropTypes.bool,
	href: PropTypes.string,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool
}

Button.defaultProps = {
	children: null,
	className: '',
	color: 'primary',
	fill: false,
	href: '',
	isDisabled: false,
	isLoading: false
}
