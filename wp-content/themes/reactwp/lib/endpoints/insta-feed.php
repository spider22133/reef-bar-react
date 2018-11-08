<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

if ( ! class_exists( 'Insta_Feed_Endpoint' ) ) :

class Insta_Feed_Endpoint {
    function init() {
        add_filter( 'rest_api_init', [ $this, 'register_routes' ] );
    }

    /**
     * Get WP API namespace.
     *
     * @since 1.2.0
     * @return string
     */
    public static function get_api_namespace() {
        return 'wp/v2';
    }


    /**
     * Get WP API InstaFeed namespace.
     *
     * @since 1.2.1
     * @return string
     */
    public static function get_plugin_namespace() {
        return 'react-theme/v1';
    }

    /**
     * Register insta posts routes for WP API v2.
     *
     * @since  1.0
     */
    public function register_routes() {
        register_rest_route( self::get_plugin_namespace(), '/insta_posts', array(
            array(
                'methods'  => WP_REST_Server::READABLE,
                'callback' => array( $this, 'get_insta_posts' ),
            )
        ) );
    }

    public static function get_insta_posts() {
        return 1111;
    }



}

endif;
