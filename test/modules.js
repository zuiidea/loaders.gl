// Sets up aliases for file reader

/* eslint-disable @typescript-eslint/no-var-requires */

const ALIASES = require('./aliases');
const {_addAliases} = require('@loaders.gl/loader-utils');
_addAliases(ALIASES);

const TEST_BASE = false;
const TEST_CORE = false;
const TEST_IMAGES = true;
const TEST_MESHES = false;
const TEST_SCENEGRAPHS = false;
const TEST_TILES = false;
const TEST_GEOSPATIAL = false;
const TEST_TABLES = false;
const TEST_ARCHIVES = false;
const TEST_CLI = false;

export const isBrowser =
  typeof process !== 'object' || String(process) !== '[object process]' || process.browser;

// Install polyfills (primarily for Node)
const {installFilePolyfills} = require('@loaders.gl/polyfills');

installFilePolyfills();

// base
if (TEST_BASE) {
  require('@loaders.gl/polyfills/test');
  require('@loaders.gl/worker-utils/test');
  require('@loaders.gl/math/test');
}

// Core
if (TEST_CORE) {
  require('@loaders.gl/loader-utils/test');
  require('@loaders.gl/core/test');
}

// Image Formats
if (TEST_IMAGES) {
  require('@loaders.gl/images/test');
  require('@loaders.gl/textures/test');
  require('@loaders.gl/video/test');
  require('@loaders.gl/tiff/test');
}

// Pointcloud/Mesh Formats
if (TEST_MESHES) {
  require('@loaders.gl/draco/test');
  require('@loaders.gl/las/test');
  require('@loaders.gl/obj/test');
  require('@loaders.gl/pcd/test');
  require('@loaders.gl/ply/test');
  require('@loaders.gl/terrain/test');
}

// Scenegraph Formats
if (TEST_SCENEGRAPHS) {
  require('@loaders.gl/gltf/test');
}

// 3D Tile Formats
if (TEST_TILES) {
  require('@loaders.gl/3d-tiles/test');
  require('@loaders.gl/i3s/test');
  require('@loaders.gl/potree/test');
  require('@loaders.gl/tiles/test');
}

// Geospatial Formats
if (TEST_GEOSPATIAL) {
  require('@loaders.gl/flatgeobuf/test')
  require('@loaders.gl/geopackage/test')
  require('@loaders.gl/gis/test')
  require('@loaders.gl/kml/test');
  require('@loaders.gl/mvt/test');
  require('@loaders.gl/shapefile/test')
  require('@loaders.gl/wkt/test');
}

// Table Formats
if (TEST_TABLES) {
  require('@loaders.gl/tables/test');
  require('@loaders.gl/arrow/test');
  require('@loaders.gl/csv/test');
  require('@loaders.gl/json/test');
  require('@loaders.gl/excel/test');
}

// Archive Formats
if (TEST_ARCHIVES) {
  require('@loaders.gl/compression/test');
  require('@loaders.gl/crypto/test');
  require('@loaders.gl/zip/test');
}

// Cli
if (!isBrowser && TEST_CLI) {
  require('@loaders.gl/tile-converter/test');
}
